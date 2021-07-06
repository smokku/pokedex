import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetastatchangeMinFieldsModelBase } from "./PokemonV2MovemetastatchangeMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetastatchangeMinFieldsModel */
export interface PokemonV2MovemetastatchangeMinFieldsModelType extends Instance<typeof PokemonV2MovemetastatchangeMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetastatchangeMinFieldsModel */
export { selectFromPokemonV2MovemetastatchangeMinFields, pokemonV2MovemetastatchangeMinFieldsModelPrimitives, PokemonV2MovemetastatchangeMinFieldsModelSelector } from "./PokemonV2MovemetastatchangeMinFieldsModel.base"

/**
 * PokemonV2MovemetastatchangeMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovemetastatchangeMinFieldsModel = PokemonV2MovemetastatchangeMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
