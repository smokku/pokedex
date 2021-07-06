import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationStddevPopFieldsModelBase } from "./PokemonV2GenerationStddevPopFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationStddevPopFieldsModel */
export interface PokemonV2GenerationStddevPopFieldsModelType extends Instance<typeof PokemonV2GenerationStddevPopFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationStddevPopFieldsModel */
export { selectFromPokemonV2GenerationStddevPopFields, pokemonV2GenerationStddevPopFieldsModelPrimitives, PokemonV2GenerationStddevPopFieldsModelSelector } from "./PokemonV2GenerationStddevPopFieldsModel.base"

/**
 * PokemonV2GenerationStddevPopFieldsModel
 *
 * aggregate stddev_pop on columns
 */
export const PokemonV2GenerationStddevPopFieldsModel = PokemonV2GenerationStddevPopFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
