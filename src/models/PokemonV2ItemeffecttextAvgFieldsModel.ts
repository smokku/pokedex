import { Instance } from "mobx-state-tree"
import { PokemonV2ItemeffecttextAvgFieldsModelBase } from "./PokemonV2ItemeffecttextAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemeffecttextAvgFieldsModel */
export interface PokemonV2ItemeffecttextAvgFieldsModelType extends Instance<typeof PokemonV2ItemeffecttextAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemeffecttextAvgFieldsModel */
export { selectFromPokemonV2ItemeffecttextAvgFields, pokemonV2ItemeffecttextAvgFieldsModelPrimitives, PokemonV2ItemeffecttextAvgFieldsModelSelector } from "./PokemonV2ItemeffecttextAvgFieldsModel.base"

/**
 * PokemonV2ItemeffecttextAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemeffecttextAvgFieldsModel = PokemonV2ItemeffecttextAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
