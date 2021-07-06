import { Instance } from "mobx-state-tree"
import { PokemonV2GenerationnameSumFieldsModelBase } from "./PokemonV2GenerationnameSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2GenerationnameSumFieldsModel */
export interface PokemonV2GenerationnameSumFieldsModelType extends Instance<typeof PokemonV2GenerationnameSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2GenerationnameSumFieldsModel */
export { selectFromPokemonV2GenerationnameSumFields, pokemonV2GenerationnameSumFieldsModelPrimitives, PokemonV2GenerationnameSumFieldsModelSelector } from "./PokemonV2GenerationnameSumFieldsModel.base"

/**
 * PokemonV2GenerationnameSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2GenerationnameSumFieldsModel = PokemonV2GenerationnameSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
