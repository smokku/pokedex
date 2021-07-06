import { Instance } from "mobx-state-tree"
import { PokemonV2NaturepokeathlonstatStddevPopFieldsModelBase } from "./PokemonV2NaturepokeathlonstatStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2NaturepokeathlonstatStddevPopFieldsModel */
export interface PokemonV2NaturepokeathlonstatStddevPopFieldsModelType extends Instance<typeof PokemonV2NaturepokeathlonstatStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2NaturepokeathlonstatStddevPopFieldsModel */
export { selectFromPokemonV2NaturepokeathlonstatStddevPopFields, pokemonV2NaturepokeathlonstatStddevPopFieldsModelPrimitives, PokemonV2NaturepokeathlonstatStddevPopFieldsModelSelector } from "./PokemonV2NaturepokeathlonstatStddevPopFieldsModel.base"

/**
 * PokemonV2NaturepokeathlonstatStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2NaturepokeathlonstatStddevPopFieldsModel = PokemonV2NaturepokeathlonstatStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
