import { Instance } from "mobx-state-tree"
import { PokemonV2ContesteffecteffecttextVarianceFieldsModelBase } from "./PokemonV2ContesteffecteffecttextVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ContesteffecteffecttextVarianceFieldsModel */
export interface PokemonV2ContesteffecteffecttextVarianceFieldsModelType extends Instance<typeof PokemonV2ContesteffecteffecttextVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ContesteffecteffecttextVarianceFieldsModel */
export { selectFromPokemonV2ContesteffecteffecttextVarianceFields, pokemonV2ContesteffecteffecttextVarianceFieldsModelPrimitives, PokemonV2ContesteffecteffecttextVarianceFieldsModelSelector } from "./PokemonV2ContesteffecteffecttextVarianceFieldsModel.base"

/**
 * PokemonV2ContesteffecteffecttextVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ContesteffecteffecttextVarianceFieldsModel = PokemonV2ContesteffecteffecttextVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
