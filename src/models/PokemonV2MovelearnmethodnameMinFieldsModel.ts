import { Instance } from "mobx-state-tree"
import { PokemonV2MovelearnmethodnameMinFieldsModelBase } from "./PokemonV2MovelearnmethodnameMinFieldsModel.base"

/* The TypeScript type of an instance of PokemonV2MovelearnmethodnameMinFieldsModel */
export interface PokemonV2MovelearnmethodnameMinFieldsModelType extends Instance<typeof PokemonV2MovelearnmethodnameMinFieldsModel.Type> {}

/* A graphql query fragment builders for PokemonV2MovelearnmethodnameMinFieldsModel */
export { selectFromPokemonV2MovelearnmethodnameMinFields, pokemonV2MovelearnmethodnameMinFieldsModelPrimitives, PokemonV2MovelearnmethodnameMinFieldsModelSelector } from "./PokemonV2MovelearnmethodnameMinFieldsModel.base"

/**
 * PokemonV2MovelearnmethodnameMinFieldsModel
 *
 * aggregate min on columns
 */
export const PokemonV2MovelearnmethodnameMinFieldsModel = PokemonV2MovelearnmethodnameMinFieldsModelBase
  .actions(self => ({
    // This is an auto-generated example action.
    log() {
      console.log(JSON.stringify(self))
    }
  }))
