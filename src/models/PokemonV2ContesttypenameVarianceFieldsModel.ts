import { Instance } from "mobx-state-tree"
import { PokemonV2ContesttypenameVarianceFieldsModelBase } from "./PokemonV2ContesttypenameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesttypenameVarianceFieldsModel */
export interface PokemonV2ContesttypenameVarianceFieldsModelType extends Instance<typeof PokemonV2ContesttypenameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesttypenameVarianceFieldsModel */
export { selectFromPokemonV2ContesttypenameVarianceFields, pokemonV2ContesttypenameVarianceFieldsModelPrimitives, PokemonV2ContesttypenameVarianceFieldsModelSelector } from "./PokemonV2ContesttypenameVarianceFieldsModel.base"

/**
 * PokemonV2ContesttypenameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ContesttypenameVarianceFieldsModel = PokemonV2ContesttypenameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
