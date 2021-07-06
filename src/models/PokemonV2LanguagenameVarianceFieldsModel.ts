import { Instance } from "mobx-state-tree"
import { PokemonV2LanguagenameVarianceFieldsModelBase } from "./PokemonV2LanguagenameVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LanguagenameVarianceFieldsModel */
export interface PokemonV2LanguagenameVarianceFieldsModelType extends Instance<typeof PokemonV2LanguagenameVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LanguagenameVarianceFieldsModel */
export { selectFromPokemonV2LanguagenameVarianceFields, pokemonV2LanguagenameVarianceFieldsModelPrimitives, PokemonV2LanguagenameVarianceFieldsModelSelector } from "./PokemonV2LanguagenameVarianceFieldsModel.base"

/**
 * PokemonV2LanguagenameVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2LanguagenameVarianceFieldsModel = PokemonV2LanguagenameVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
