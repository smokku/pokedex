import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffecteffecttextVarianceFieldsModelBase } from "./PokemonV2ItemflingeffecteffecttextVarianceFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffecteffecttextVarianceFieldsModel */
export interface PokemonV2ItemflingeffecteffecttextVarianceFieldsModelType extends Instance<typeof PokemonV2ItemflingeffecteffecttextVarianceFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffecteffecttextVarianceFieldsModel */
export { selectFromPokemonV2ItemflingeffecteffecttextVarianceFields, pokemonV2ItemflingeffecteffecttextVarianceFieldsModelPrimitives, PokemonV2ItemflingeffecteffecttextVarianceFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextVarianceFieldsModel.base"

/**
 * PokemonV2ItemflingeffecteffecttextVarianceFieldsModel
 *
 * aggregate variance on columns
 */
export const PokemonV2ItemflingeffecteffecttextVarianceFieldsModel = PokemonV2ItemflingeffecteffecttextVarianceFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
