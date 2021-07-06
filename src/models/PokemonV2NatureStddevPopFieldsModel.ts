import { Instance } from "mobx-state-tree"
import { PokemonV2NatureStddevPopFieldsModelBase } from "./PokemonV2NatureStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NatureStddevPopFieldsModel */
export interface PokemonV2NatureStddevPopFieldsModelType extends Instance<typeof PokemonV2NatureStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NatureStddevPopFieldsModel */
export { selectFromPokemonV2NatureStddevPopFields, pokemonV2NatureStddevPopFieldsModelPrimitives, PokemonV2NatureStddevPopFieldsModelSelector } from "./PokemonV2NatureStddevPopFieldsModel.base"

/**
 * PokemonV2NatureStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2NatureStddevPopFieldsModel = PokemonV2NatureStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
