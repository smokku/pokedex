import { Instance } from "mobx-state-tree"
import { PokemonV2GenderStddevFieldsModelBase } from "./PokemonV2GenderStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenderStddevFieldsModel */
export interface PokemonV2GenderStddevFieldsModelType extends Instance<typeof PokemonV2GenderStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenderStddevFieldsModel */
export { selectFromPokemonV2GenderStddevFields, pokemonV2GenderStddevFieldsModelPrimitives, PokemonV2GenderStddevFieldsModelSelector } from "./PokemonV2GenderStddevFieldsModel.base"

/**
 * PokemonV2GenderStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2GenderStddevFieldsModel = PokemonV2GenderStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
