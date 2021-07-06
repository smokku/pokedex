import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffectAvgFieldsModelBase } from "./PokemonV2ItemflingeffectAvgFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffectAvgFieldsModel */
export interface PokemonV2ItemflingeffectAvgFieldsModelType extends Instance<typeof PokemonV2ItemflingeffectAvgFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffectAvgFieldsModel */
export { selectFromPokemonV2ItemflingeffectAvgFields, pokemonV2ItemflingeffectAvgFieldsModelPrimitives, PokemonV2ItemflingeffectAvgFieldsModelSelector } from "./PokemonV2ItemflingeffectAvgFieldsModel.base"

/**
 * PokemonV2ItemflingeffectAvgFieldsModel
 *
 * aggregate avg on columns
 */
export const PokemonV2ItemflingeffectAvgFieldsModel = PokemonV2ItemflingeffectAvgFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
