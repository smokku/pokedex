import { Instance } from "mobx-state-tree"
import { PokemonV2SupercontesteffectflavortextVarianceFieldsModelBase } from "./PokemonV2SupercontesteffectflavortextVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2SupercontesteffectflavortextVarianceFieldsModel */
export interface PokemonV2SupercontesteffectflavortextVarianceFieldsModelType extends Instance<typeof PokemonV2SupercontesteffectflavortextVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2SupercontesteffectflavortextVarianceFieldsModel */
export { selectFromPokemonV2SupercontesteffectflavortextVarianceFields, pokemonV2SupercontesteffectflavortextVarianceFieldsModelPrimitives, PokemonV2SupercontesteffectflavortextVarianceFieldsModelSelector } from "./PokemonV2SupercontesteffectflavortextVarianceFieldsModel.base"

/**
 * PokemonV2SupercontesteffectflavortextVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2SupercontesteffectflavortextVarianceFieldsModel = PokemonV2SupercontesteffectflavortextVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
