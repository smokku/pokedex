import { Instance } from "mobx-state-tree"
import { PokemonV2MovemetacategoryMaxFieldsModelBase } from "./PokemonV2MovemetacategoryMaxFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovemetacategoryMaxFieldsModel */
export interface PokemonV2MovemetacategoryMaxFieldsModelType extends Instance<typeof PokemonV2MovemetacategoryMaxFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovemetacategoryMaxFieldsModel */
export { selectFromPokemonV2MovemetacategoryMaxFields, pokemonV2MovemetacategoryMaxFieldsModelPrimitives, PokemonV2MovemetacategoryMaxFieldsModelSelector } from "./PokemonV2MovemetacategoryMaxFieldsModel.base"

/**
 * PokemonV2MovemetacategoryMaxFieldsModel
 *
 * aggregate max on columns
 */
export const PokemonV2MovemetacategoryMaxFieldsModel = PokemonV2MovemetacategoryMaxFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
