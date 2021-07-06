import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffectSumFieldsModelBase } from "./PokemonV2ItemflingeffectSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffectSumFieldsModel */
export interface PokemonV2ItemflingeffectSumFieldsModelType extends Instance<typeof PokemonV2ItemflingeffectSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffectSumFieldsModel */
export { selectFromPokemonV2ItemflingeffectSumFields, pokemonV2ItemflingeffectSumFieldsModelPrimitives, PokemonV2ItemflingeffectSumFieldsModelSelector } from "./PokemonV2ItemflingeffectSumFieldsModel.base"

/**
 * PokemonV2ItemflingeffectSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2ItemflingeffectSumFieldsModel = PokemonV2ItemflingeffectSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
