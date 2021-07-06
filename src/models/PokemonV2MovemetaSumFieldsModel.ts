import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetaSumFieldsModelBase } from "./PokemonV2MovemetaSumFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetaSumFieldsModel */
export interface PokemonV2MovemetaSumFieldsModelType extends Instance<typeof PokemonV2MovemetaSumFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetaSumFieldsModel */
export { selectFromPokemonV2MovemetaSumFields, pokemonV2MovemetaSumFieldsModelPrimitives, PokemonV2MovemetaSumFieldsModelSelector } from "./PokemonV2MovemetaSumFieldsModel.base"

/**
 * PokemonV2MovemetaSumFieldsModel
 *
 * aggregate sum on columns
 */
export const PokemonV2MovemetaSumFieldsModel = PokemonV2MovemetaSumFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
