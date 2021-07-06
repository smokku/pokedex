import { Instance } from "mobx-state-tree"
import { PokemonV2GenderStddevPopFieldsModelBase } from "./PokemonV2GenderStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenderStddevPopFieldsModel */
export interface PokemonV2GenderStddevPopFieldsModelType extends Instance<typeof PokemonV2GenderStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenderStddevPopFieldsModel */
export { selectFromPokemonV2GenderStddevPopFields, pokemonV2GenderStddevPopFieldsModelPrimitives, PokemonV2GenderStddevPopFieldsModelSelector } from "./PokemonV2GenderStddevPopFieldsModel.base"

/**
 * PokemonV2GenderStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2GenderStddevPopFieldsModel = PokemonV2GenderStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
