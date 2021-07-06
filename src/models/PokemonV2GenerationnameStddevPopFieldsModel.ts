import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationnameStddevPopFieldsModelBase } from "./PokemonV2GenerationnameStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationnameStddevPopFieldsModel */
export interface PokemonV2GenerationnameStddevPopFieldsModelType extends Instance<typeof PokemonV2GenerationnameStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationnameStddevPopFieldsModel */
export { selectFromPokemonV2GenerationnameStddevPopFields, pokemonV2GenerationnameStddevPopFieldsModelPrimitives, PokemonV2GenerationnameStddevPopFieldsModelSelector } from "./PokemonV2GenerationnameStddevPopFieldsModel.base"

/**
 * PokemonV2GenerationnameStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2GenerationnameStddevPopFieldsModel = PokemonV2GenerationnameStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
