import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflavortextVarianceFieldsModelBase } from "./PokemonV2ItemflavortextVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflavortextVarianceFieldsModel */
export interface PokemonV2ItemflavortextVarianceFieldsModelType extends Instance<typeof PokemonV2ItemflavortextVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflavortextVarianceFieldsModel */
export { selectFromPokemonV2ItemflavortextVarianceFields, pokemonV2ItemflavortextVarianceFieldsModelPrimitives, PokemonV2ItemflavortextVarianceFieldsModelSelector } from "./PokemonV2ItemflavortextVarianceFieldsModel.base"

/**
 * PokemonV2ItemflavortextVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemflavortextVarianceFieldsModel = PokemonV2ItemflavortextVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
