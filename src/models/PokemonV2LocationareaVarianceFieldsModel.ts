import { Instance } from "mobx-state-tree"
import { PokemonV2LocationareaVarianceFieldsModelBase } from "./PokemonV2LocationareaVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2LocationareaVarianceFieldsModel */
export interface PokemonV2LocationareaVarianceFieldsModelType extends Instance<typeof PokemonV2LocationareaVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2LocationareaVarianceFieldsModel */
export { selectFromPokemonV2LocationareaVarianceFields, pokemonV2LocationareaVarianceFieldsModelPrimitives, PokemonV2LocationareaVarianceFieldsModelSelector } from "./PokemonV2LocationareaVarianceFieldsModel.base"

/**
 * PokemonV2LocationareaVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2LocationareaVarianceFieldsModel = PokemonV2LocationareaVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
