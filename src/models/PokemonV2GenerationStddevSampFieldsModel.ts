import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationStddevSampFieldsModelBase } from "./PokemonV2GenerationStddevSampFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationStddevSampFieldsModel */
export interface PokemonV2GenerationStddevSampFieldsModelType extends Instance<typeof PokemonV2GenerationStddevSampFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationStddevSampFieldsModel */
export { selectFromPokemonV2GenerationStddevSampFields, pokemonV2GenerationStddevSampFieldsModelPrimitives, PokemonV2GenerationStddevSampFieldsModelSelector } from "./PokemonV2GenerationStddevSampFieldsModel.base"

/**
 * PokemonV2GenerationStddevSampFieldsModel
 *
 * aggregate stddev_samp on columns
 */
export const PokemonV2GenerationStddevSampFieldsModel = PokemonV2GenerationStddevSampFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
