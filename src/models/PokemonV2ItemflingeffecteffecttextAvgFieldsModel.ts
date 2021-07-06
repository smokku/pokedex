import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffecteffecttextAvgFieldsModelBase } from "./PokemonV2ItemflingeffecteffecttextAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffecteffecttextAvgFieldsModel */
export interface PokemonV2ItemflingeffecteffecttextAvgFieldsModelType extends Instance<typeof PokemonV2ItemflingeffecteffecttextAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffecteffecttextAvgFieldsModel */
export { selectFromPokemonV2ItemflingeffecteffecttextAvgFields, pokemonV2ItemflingeffecteffecttextAvgFieldsModelPrimitives, PokemonV2ItemflingeffecteffecttextAvgFieldsModelSelector } from "./PokemonV2ItemflingeffecteffecttextAvgFieldsModel.base"

/**
 * PokemonV2ItemflingeffecteffecttextAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemflingeffecteffecttextAvgFieldsModel = PokemonV2ItemflingeffecteffecttextAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
