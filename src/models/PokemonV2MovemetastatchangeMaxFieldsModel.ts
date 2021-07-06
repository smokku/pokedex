import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetastatchangeMaxFieldsModelBase } from "./PokemonV2MovemetastatchangeMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetastatchangeMaxFieldsModel */
export interface PokemonV2MovemetastatchangeMaxFieldsModelType extends Instance<typeof PokemonV2MovemetastatchangeMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetastatchangeMaxFieldsModel */
export { selectFromPokemonV2MovemetastatchangeMaxFields, pokemonV2MovemetastatchangeMaxFieldsModelPrimitives, PokemonV2MovemetastatchangeMaxFieldsModelSelector } from "./PokemonV2MovemetastatchangeMaxFieldsModel.base"

/**
 * PokemonV2MovemetastatchangeMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovemetastatchangeMaxFieldsModel = PokemonV2MovemetastatchangeMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
