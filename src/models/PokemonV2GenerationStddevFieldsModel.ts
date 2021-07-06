import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationStddevFieldsModelBase } from "./PokemonV2GenerationStddevFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationStddevFieldsModel */
export interface PokemonV2GenerationStddevFieldsModelType extends Instance<typeof PokemonV2GenerationStddevFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationStddevFieldsModel */
export { selectFromPokemonV2GenerationStddevFields, pokemonV2GenerationStddevFieldsModelPrimitives, PokemonV2GenerationStddevFieldsModelSelector } from "./PokemonV2GenerationStddevFieldsModel.base"

/**
 * PokemonV2GenerationStddevFieldsModel
 *
 * aggregate stddev on columns
 */
export const PokemonV2GenerationStddevFieldsModel = PokemonV2GenerationStddevFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
