import { Instance } from "mobx-state-tree"
import { PokemonV2ItemeffecttextVarianceFieldsModelBase } from "./PokemonV2ItemeffecttextVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemeffecttextVarianceFieldsModel */
export interface PokemonV2ItemeffecttextVarianceFieldsModelType extends Instance<typeof PokemonV2ItemeffecttextVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemeffecttextVarianceFieldsModel */
export { selectFromPokemonV2ItemeffecttextVarianceFields, pokemonV2ItemeffecttextVarianceFieldsModelPrimitives, PokemonV2ItemeffecttextVarianceFieldsModelSelector } from "./PokemonV2ItemeffecttextVarianceFieldsModel.base"

/**
 * PokemonV2ItemeffecttextVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemeffecttextVarianceFieldsModel = PokemonV2ItemeffecttextVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
