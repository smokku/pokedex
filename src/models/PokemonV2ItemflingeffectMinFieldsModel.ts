import { Instance } from "mobx-state-tree"
import { PokemonV2ItemflingeffectMinFieldsModelBase } from "./PokemonV2ItemflingeffectMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2ItemflingeffectMinFieldsModel */
export interface PokemonV2ItemflingeffectMinFieldsModelType extends Instance<typeof PokemonV2ItemflingeffectMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2ItemflingeffectMinFieldsModel */
export { selectFromPokemonV2ItemflingeffectMinFields, pokemonV2ItemflingeffectMinFieldsModelPrimitives, PokemonV2ItemflingeffectMinFieldsModelSelector } from "./PokemonV2ItemflingeffectMinFieldsModel.base"

/**
 * PokemonV2ItemflingeffectMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2ItemflingeffectMinFieldsModel = PokemonV2ItemflingeffectMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
