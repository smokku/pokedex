import { Instance } from "mobx-state-tree"
import { PokemonV2MoveflavortextVarianceFieldsModelBase } from "./PokemonV2MoveflavortextVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MoveflavortextVarianceFieldsModel */
export interface PokemonV2MoveflavortextVarianceFieldsModelType extends Instance<typeof PokemonV2MoveflavortextVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MoveflavortextVarianceFieldsModel */
export { selectFromPokemonV2MoveflavortextVarianceFields, pokemonV2MoveflavortextVarianceFieldsModelPrimitives, PokemonV2MoveflavortextVarianceFieldsModelSelector } from "./PokemonV2MoveflavortextVarianceFieldsModel.base"

/**
 * PokemonV2MoveflavortextVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2MoveflavortextVarianceFieldsModel = PokemonV2MoveflavortextVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
