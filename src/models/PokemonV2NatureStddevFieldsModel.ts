import { Instance } from "mobx-state-tree"
import { PokemonV2NatureStddevFieldsModelBase } from "./PokemonV2NatureStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NatureStddevFieldsModel */
export interface PokemonV2NatureStddevFieldsModelType extends Instance<typeof PokemonV2NatureStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NatureStddevFieldsModel */
export { selectFromPokemonV2NatureStddevFields, pokemonV2NatureStddevFieldsModelPrimitives, PokemonV2NatureStddevFieldsModelSelector } from "./PokemonV2NatureStddevFieldsModel.base"

/**
 * PokemonV2NatureStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2NatureStddevFieldsModel = PokemonV2NatureStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
